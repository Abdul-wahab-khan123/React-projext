import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../components/ui/accordion";

const faqData = [
  {
    id: "shipping",
    question: "How long does shipping take?",
    answer: "Orders are usually processed within 1–2 business days. Delivery times depend on your location and selected shipping method.",
  },
  {
    id: "dropshipping",
    question: "Do you offer dropshipping?",
    answer: "Yes. We support dropshipping and can ship products directly to your customers without unnecessary hassle.",
  },
  {
    id: "support",
    question: "Do you provide 24/7 customer support?",
    answer: "Yes. Our support team is available 24/7 to help with orders, shipping questions, and customer concerns.",
  },
  {
    id: "returns",
    question: "Can I return or exchange an order?",
    answer: "Eligible products can be returned or exchanged according to our return policy. Contact our support team for assistance.",
  },
  {
    id: "tracking",
    question: "Can I track my order?",
    answer: "Yes. Once your order has shipped, tracking information will be provided so you can follow your delivery.",
  },
];

const FaqAccordion = () => {
  return (
    <div className="w-full px-15 py-20 mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <Accordion defaultValue={["shipping"]} className="w-full">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
              <AccordionTrigger className="py-6 text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="overflow-hidden rounded-3xl">
        <img src="https://media.istockphoto.com/id/1396839153/photo/feet-in-sneakers-standing-among-autumn-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=xR5VrWElaLJWnU3-M8qwvzlHwSZuD8iRH4jqYM23NXw=" alt="A pair of stylish sneakers" className="h-150 w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
    </div>
  );
};

export default FaqAccordion;