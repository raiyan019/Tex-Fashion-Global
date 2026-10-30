function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-12 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
