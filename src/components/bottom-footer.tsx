import { cn } from "@/lib/utils";

export const BottomFooter = ({ className = "" }: { className?: string }) => {
  {
    /* <!-- Footer Bottom --> */
  }
  return (
    <div
      className={cn(
        "container mx-auto bg-[#0a1628] py-4 px-5 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4",
        className
      )}
    >
      <p className="text-gray-400 text-sm">
        © 2024 Truthify. All rights reserved.
      </p>
      {/* <!-- Social Links --> */}
      <div className="flex items-center gap-6">
        <a href="#">
          <img src="/facebook.png" alt="facebook" className="size-6" />
        </a>
        <a href="#">
          <img src="/google.png" alt="facebook" className="size-6" />
        </a>
        <a href="#">
          <img src="/apple.png" alt="facebook" className="size-6" />
        </a>
        <a href="#">
          <img src="/instagram.png" alt="facebook" className="size-6" />
        </a>
      </div>
    </div>
  );
};
