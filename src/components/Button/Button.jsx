export const Button = ({ className, children, type = "button" }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
