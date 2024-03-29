"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  onClick?: () => void;
}
const BackBtn = ({ className, onClick }: Props) => {
  const { back } = useRouter();
  return (
    <button
      className={clsx(
        "text-[1.25rem] text-grayBlack cursor-pointer flex items-center font-[500]",
        className
      )}
      onClick={onClick ? onClick : () => back()}
    >
      <span className="h-12 w-12 md:h-[1.7rem] md:w-[1.7rem] rounded-full grid place-content-center border border-grayBlack mr-[1.125rem] ">
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.94311 9.72931C4.7152 10.058 4.31851 10.0921 4.05708 9.8056L0.215263 5.59508C0.078463 5.44515 -5.29886e-05 5.22815 -5.29686e-05 5C-5.29487e-05 4.77184 0.0784631 4.55484 0.215263 4.40492L4.05708 0.1944C4.31851 -0.0921188 4.7152 -0.0579629 4.94311 0.270693C5.17103 0.599348 5.14386 1.09804 4.88243 1.38456L2.30392 4.21053L9.83844 4.21053C10.1853 4.21053 10.4664 4.56399 10.4664 5C10.4664 5.43601 10.1853 5.78947 9.83844 5.78947L2.30392 5.78947L4.88242 8.61543C5.14385 8.90195 5.17103 9.40065 4.94311 9.72931Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="">Back</span>
    </button>
  );
};

export default BackBtn;
