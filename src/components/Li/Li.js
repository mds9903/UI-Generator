export const Li = ({ className, id, children }) => {
  return (
    <li id={id} className={className}>
      {children}
    </li>
  );
};
