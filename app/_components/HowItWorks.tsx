import React from "react";

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="relative w-full"
      style={{ scrollMargin: 100 }}
    >
      <div className="w-full pl-4 lg:max-w-[1200px] mx-auto pt-8 md:py-10">
        <h2 className="text-[32px] text-center">How it works</h2>
        <div className="w-full pt-8 md:py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-10">
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">Create an account</div>
              <div className="text-slate-700 text-[16px]">
                Create your free account on Expensasaurus by providing your
                basic details. It only takes a few minutes to get started.
              </div>
            </div>
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">Set Your Budget</div>
              <div className="text-slate-700 text-[16px]">
                Define your budget by allocating spending limits to different
                categories, such as food, transportation, entertainment, and
                more. Customize it to match your unique financial goals.
              </div>
            </div>
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">
                Track Your Expenses and Income
              </div>
              <div className="text-slate-700 ">
                Enter your expenses and income with ease. Add transactions,
                categorize them, and keep a comprehensive record of your
                financial activities to maintain an accurate overview.
              </div>
            </div>
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">Monitor Your Budget</div>
              <div className="text-slate-700 text-[16px]">
                Keep a close eye on your budget's progress with real-time
                updates. Visualize your spending patterns, track category-wise
                expenses, and receive notifications to stay within your limits.
              </div>
            </div>
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">Analyze Your Finances</div>
              <div className="text-slate-700 text-[16px]">
                Gain valuable insights into your financial habits with our
                intuitive analysis tools. Explore interactive charts and reports
                to understand where your money is going and make informed
                decisions.
              </div>
            </div>
            <div className="max-w-[29rem]">
              <div className="text-[24px] mb-4 ">Adjust and Optimize</div>
              <div className="text-slate-700 text-[16px]">
                Fine-tune your budget as needed based on your financial goals
                and changing circumstances. Modify spending limits, add new
                categories, or reallocate funds to optimize your budget.
              </div>
            </div>
          </div>
          <div>
            <img
              alt="How it works."
              loading="lazy"
              width={700}
              height={900}
              decoding="async"
              data-nimg={1}
              className="z-[-1] mt-4 md:mt-0 md:opacity-30 lg:opacity-100 md:absolute md:right-0 md:top-[50%] md:translate-y-[-50%]"
              srcSet="/_next/image?url=%2Fshowcase1.png&w=750&q=75 1x, /_next/image?url=%2Fshowcase1.png&w=1920&q=75 2x"
              src="/_next/image?url=%2Fshowcase1.png&w=1920&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
