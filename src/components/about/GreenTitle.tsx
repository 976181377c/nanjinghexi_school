export const GreenTitle = ({ text }: { text: string }) => {
  return (
    <span className="flex items-center">
      <div className="w-[32px] h-px bg-[rgba(1,_129,_109,_0.4)]"></div>
      <span className="mx-[8px] text-[rgba(1,_129,_109,_1)] font-medium text-[14px] leading-[100%] uppercase tracking-[4px]">
        {text}
      </span>
      <div className="w-[32px] h-px bg-[rgba(1,_129,_109,_0.4)]"></div>
    </span>
  );
};
