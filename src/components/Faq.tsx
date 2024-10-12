"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div
        className="w-full max-w-2xl p-2 mx-auto rounded-2xl scroll-mt-80"
        id="faq"
      >
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How much is the commission price of one image? ",
    answer: "The commission price depends on the number of objects drawn, but I assure you it is very cheap.",
  },
  {
    question: "is there a package for handicrafts? ",
    answer: "There is, but you will be charged extra",
  },
  {
    question: "is there a limit for revision? ",
    answer:
      "there is no limit to revision, but don't torture our artists",
  },
  {
    question: "Is it possible to pay through the bank? ",
    answer:
      "No, we only accept through gopay or shopeepay.",
  },
];
