import React, { useEffect, useRef, useState } from "react";

type CardProps = {
  List: any,
  children: any,
};

const ScrollHorizontal: React.FC<CardProps> = (props): React.ReactElement => {
  const ref: any = useRef();

  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const element: any = ref.current;
    if (element) {
      const onWheel = (event: React.WheelEvent) => {
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
          behavior: "auto",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
    return undefined
  }, []);

  const onMouseMove = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    const { clientX, scrollX, isScrolling } = state;
    if (isScrolling) {
      ref.current.scrollLeft = scrollX + event.clientX - clientX;
      setState({
        ...state,
        scrollX: scrollX + event.clientX - clientX,
        clientX: event.clientX,
      });
    }
  };
  const onMouseUp = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    setState({
      ...state,
      isScrolling: false,
    });
  };
  const onMouseDown = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    setState({
      ...state,
      isScrolling: true,
      clientX: event.clientX,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousedown", onMouseDown);
    };
  });

  return (
    <props.List
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {" "}
      {props.children}
    </props.List>
  );
};

export default ScrollHorizontal