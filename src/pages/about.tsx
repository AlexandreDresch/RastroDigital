import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

import DetectiveImage from "../../public/detective.png";

export default function About() {
  return (
    <>
      <Head>
        <title>Rastro Digital | Sobre</title>

        <meta name="Descrição" content="Descrição dos motivos do projeto" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Motivação"
            className="mb-16 lg:!text-7xl sm:!text-6xl xl:!text-4xl sm:mb-8"
          />

          <div className="flex w-full lg:flex-col">
            <div className="max-w-[33%] flex flex-col items-start justify-start text-dark dark:text-light lg:max-w-full">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Porquê existimos
              </h2>
              <p className="font-medium">
                Nosso principal objetivo aqui no Rastro Digital é fornecer
                informações atualizadas e relevantes sobre as ameaças e
                atividades criminosas que ocorrem no ambiente digital.
              </p>
              <p className="my-4 font-medium">
                Temos como motivação promover a conscientização e a proteção dos
                usuários da Internet, informando sobre as táticas utilizadas
                pelos criminosos, as vulnerabilidades existentes e as medidas de
                segurança que podem ser adotadas para prevenir ataques virtuais.
                Ao compartilhar esses alertas, buscamos capacitar os usuários a
                tomarem decisões informadas e seguras ao navegar na web,
                protegendo seus dados pessoais, identidades e recursos
                financeiros.
              </p>
              <p className="font-medium">
                Além disso, ao compartilhar informações sobre crimes virtuais,
                buscamos contribuir para a identificação e denúncia dessas
                atividades criminosas, auxiliando na ação das autoridades
                competentes para combater a cibercriminalidade e promover um
                ambiente online mais seguro para todos.
              </p>
            </div>

            <div className="flex w-full justify-center items-center rounded-2xl bg-transparent p-6 lg:px-0">
              <Image
                src={DetectiveImage}
                alt="Detective Image"
                className="w-96 h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="max-w-[33%] flex flex-col items-start justify-start text-dark dark:text-light lg:max-w-full">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                O autor
              </h2>
              <p className="font-medium">
                Prazer, me chamo Alexandre, tenho 26 anos e sou um entusiasta da
                programação e desenvolvimento de sistemas.
              </p>
              <p className="my-4 font-medium">
                Diante do aumento preocupante de tentativas de golpes virtuais
                que afetaram minha própria família, senti uma forte motivação
                para criar esse site de denúncia de golpes virtuais. Minha
                intenção é proporcionar uma plataforma que não apenas dê
                assistência à minha família, mas também outras vítimas
                vulneráveis, capacitando-as a compreender melhor o tema e,
                assim, identificar de forma mais eficaz qualquer ocorrência
                semelhante que possa surgir em seus círculos sociais. Ao fazer
                isso, espero não apenas ajudar individualmente, mas também
                contribuir para a conscientização e prevenção desses delitos,
                criando um espaço onde a segurança online e a solidariedade
                prevaleçam.
              </p>
              <p className="font-medium">
                Este site foi desenvolvido como uma entrega de um projeto do
                curso de Análise e Desenvolvimento de Sistemas ofertado pela
                faculdade UNINTER.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
