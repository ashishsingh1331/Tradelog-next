import React from "react";
import TableContents from "./TableContents";
import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="relative py-10"
      style={{ scrollMargin: 100 }}
    >
      <div className="w-full pl-4 lg:max-w-[1200px] mx-auto md:pt-8 md:py-10">
        <h2 className="md:text-5xl sm:text-3xl text-gray-800 tracking-wide font-semibold md:px-16 text-center">
          Introducing Trade log: Start your journey toward financial wellness
        </h2>
        <div className="w-full pt-8 md:py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-10 w-full">
            <TableContents />

            <div id="description" className="">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                Description of the Project
              </div>
              <div className="text-slate-700 text-sm md:text-lg md:leading-8 md:py-3">
                Expensasaurus is a user-friendly and intuitive expense-tracking
                and budgeting application designed to empower individuals and
                businesses alike. With its comprehensive features and seamless
                interface, you can take control of your finances and make
                informed decisions with ease.
                <p className="md:mt-4 sm:mt-2">
                  This is my submission for the Appwrite x Hashnode Hackathon
                  🔥.
                </p>
              </div>
            </div>

            <div id="inspiration" className="">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                Inspiration:
              </div>
              <div className="">
                The inspiration behind building this project from the
                realization that many existing financial analytics solutions
                come with a hefty price tag, making it inaccessible for most
                individuals and businesses.
              </div>
            </div>

            <div id="workflow" className="">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                Application Workflow:
              </div>
              <Image
                src="/workflowimg.avif"
                className="md:mt-10 object-cover"
                width="1000"
                height="500"
                alt="image"
              />
            </div>

            <div id="howitwork" className="max-w-[29rem] md:mt-6">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                🧐 How does it work?
              </div>
              <div className="text-slate-700 flex flex-col">
                <span className="text-slate-700 text-sm md:text-xl md:leading-8 md:py-3">
                  1. Create an Account:{" "}
                  <Link href="/" className="underline">
                    Signup here.
                  </Link>
                </span>
                <span className="text-slate-700 text-sm md:text-xl md:leading-8 md:py-3">
                  2.{" "}
                  <Link href="/" className="underline">
                    set your budget.
                  </Link>
                </span>
                <span className="text-slate-700 text-sm md:text-xl md:leading-8 md:py-3">
                  3. Log & Track your expenses and income. <br />
                  <Link href="/" className="underline ms-6">
                    Add Expenses{" "}
                  </Link>
                  and{" "}
                  <Link href="/" className="underline">
                    Incomes
                  </Link>
                </span>
                <span className="text-slate-700 text-sm md:text-xl md:leading-8 md:py-3">
                  4. Monitor your Budget:{" "}
                  <p className="ms-6">
                    Get an overview of your spending habits with charts and
                    graphs.
                  </p>
                </span>
                <span className="text-slate-700 text-sm md:text-xl md:leading-8 md:py-3">
                  5. Plan Ahead:{" "}
                  <p className="ms-6">
                    Make informed financial decisions and set savings goals.
                  </p>
                </span>
              </div>
            </div>

            <div id="features" className="md:mt-6">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                Features
              </div>
              <Image
                src="/featureimg.avif"
                className="md:mt-10 object-cover"
                width="1000"
                height="500"
                alt="image"
              />
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-14">
                <span>1.</span>
                <span className="ms-2">
                  Intuitive Expense Tracking: Expensasaurus offers a
                  user-friendly interface that allows you to effortlessly track
                  your expenses. With just a few clicks, you can record your
                  spending, categorize transactions, and add detailed
                  descriptions. Say goodbye to the hassle of manual expense
                  logging and let Expensasaurus do the work for you.
                </span>
              </div>
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>2.</span>
                <span className="ms-2">
                  Comprehensive Budget Management: Take control of your finances
                  with the budget management feature. Set monthly spending
                  limits for different categories such as food, transportation,
                  entertainment, and more.
                </span>
              </div>
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>3.</span>
                <span className="ms-2">
                  Smart Insights and Analytics: Gain valuable financial
                  intelligence with interactive charts and graphs that visualize
                  your spending patterns. Identify trends, understand where your
                  money goes, and make data-driven decisions to optimize your
                  budget.
                </span>
              </div>
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>4.</span>
                <span className="ms-2">
                  Transaction Categorization and Filtering: Efficiently manage
                  your expenses with transaction categorization and filtering
                  capabilities. Easily group transactions by category, date, or
                  custom tags, making it effortless to search and analyze
                  specific spending patterns. Stay organized and retrieve
                  information with ease whenever you need it.
                </span>
              </div>
            </div>

            <div id="routes" className="md:mt-10">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
                Routes and their description
              </div>
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-14">
                <span>1.</span>
                <span className="ms-2">
                  Home ("/"): <br />
                  The landing page of Expensasaurus provides an overview of the
                  application and its key features.
                </span>
              </div>
                <Image
                  src="/routesimg.avif"
                  className="md:mt-10 object-cover"
                  width="1000"
                  height="500"
                  alt="image"
                />
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>2.</span>
                <span className="ms-2">
                  Login ("/login"): <br/>Allows users to log in to their
                  Expensasaurus account, providing secure access to their
                  expense data.
                </span>
              </div>
              <div className="flex text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>3.</span>
                <span className="ms-2">
                  Signup ("/signup"): <br/>Enables new users to create an account and
                  join Expensasaurus.
                </span>
              </div>
              <div className=" text-slate-700 text-sm md:text-xl md:leading-8 md:py-3 md:mt-6">
                <span>4.</span>
                <span className="ms-2">
                  Dashboard ("/dashboard"):
                </span>
                <Image
                  src="/dashboardimg.avif"
                  className="md:mt-10 object-cover"
                  width="1000"
                  height="500"
                  alt="image"
                />
              </div>
            </div>

            
            <div id="techstack" className="">
              <div className="md:text-4xl sm:text-2xl text-xl font-semibold mb-4">
              🛠 Tech Stack
              </div>
              <div className="text-slate-700 text-sm md:text-lg md:leading-8 md:py-3">
                <li>Next.js</li>
                <li>Javascript</li>
                <li>shadcn</li>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
