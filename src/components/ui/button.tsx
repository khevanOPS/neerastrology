export function Button({
  children,
  className = "",
  variant,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 text-center align-middle font-medium leading-none transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4705A]/35 disabled:pointer-events-none disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
