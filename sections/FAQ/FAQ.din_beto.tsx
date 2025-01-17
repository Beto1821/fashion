export interface Props {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQ({ questions }: Props) {
  return (
    <div>
      <header
        class="text-5xl font-albert-sans font-normal flex justify-center p-4"
        style="width: 328px; height: 48px; line-height: 48px; color: #292929;"
      >
        FAQs
      </header>
      <div
        class="text-lg font-albert-sans font-normal text-base-500 text-center"
        style="width: 328px; height: 112px; line-height: 28px; color: #292929;"
      >
        Aproveite a conveniência de nosso campo FAQ e tenha uma experiência
        tranquila e esclarecedora enquanto explora as respostas para suas
        perguntas. Estamos aqui para tornar sua jornada conosco a melhor
        possível. Agradecemos por escolher nossa empresa e esperamos fornecer
        todas as informações necessárias para sua completa satisfação.
      </div>
      <ul>
        {questions.map(({ question, answer }, index) => (
          <div>
            <li
              key={index}
              class="text-lg font-albert-sans font-normal text-base-500 w-292 h-28 leading-28 text-base-500 p-10"
              style="color: #292929;"
            >
              {question}
            </li>
          </div>
        ))}
      </ul>
      <h2 class="text-4xl font-albert-sans font-normal text-base-500 text-center" 
      style="width: 328px; height: 80px; line-height: 40px; color: #292929;">
        Still have a question?
        </h2>
      <button class="flex flex-row justify-center items-center p-2 gap-2 w-83 h-40 bg-primary">
        Contact
      </button>
    </div>
  );
}
