interface Props {
  className?: string;
  flip?: boolean;
}

export function SectionDivider({ className = "" }: Props) {
  return (
    <div className={`relative w-full px-6 sm:px-10 md:px-14 py-4 ${className}`}>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(40,43,74,0.18)",
          margin: 0,
        }}
      />
    </div>
  );
}
