import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

import Astronaut from "../../public/astronaut.png";
import { AnimatedText } from "@/components/AnimatedText";
import { RoadMap } from "@/components/RoadMap";
import Details from "@/components/RoadMap/Details";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rastro Digital</title>
        <meta name="description" content="Blog de segurança" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout>
          <div className="flex items-center justify-between w-full mb-32 lg:flex-col">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full md:w-full">
              <AnimatedText
                text="Construindo um mundo digital mais seguro, um passo de cada vez."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium lg:text-center md:text-sm">
                Desvende os segredos dos golpes digitais. Proteja-se, aprenda e
                esteja um passo à frente da ameaça. <span className="text-primary font-semibold dark:text-primaryDark">Juntos</span>, construiremos um
                mundo virtual mais seguro.
              </p>
            </div>

            <div className="w-1/2 flex justify-end md:w-full md:justify-center">
              <Image
                src={Astronaut}
                alt="Astronaut with laptop"
                className="max-w-lg h-auto lg:hidden md:inline-block md:mt-16 "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          <RoadMap title="Etapa 1: Proteção Básica">
            <Details
              title="Senhas Fortes"
              description="Use senhas únicas e complexas para cada conta, combinando letras maiúsculas, minúsculas, números e caracteres especiais."
            />

            <Details
              title="Autenticação de Dois Fatores (2FA)"
              description="Ative a autenticação de dois fatores sempre que possível, para adicionar uma camada extra de segurança às suas contas."
            />

            <Details
              title="Software Atualizado"
              description="Mantenha o sistema operacional, os programas e os aplicativos atualizados com as versões mais recentes para corrigir vulnerabilidades."
            />
          </RoadMap>

          <RoadMap title="Etapa 2: Navegação Segura">
            <Details
              title="Verifique URLs"
              description="Antes de clicar em links, passe o mouse sobre eles para ver a URL completa e garantir que seja legítima."
            />

            <Details
              title="Evite Downloads Suspeitos"
              description="Não baixe arquivos de fontes não confiáveis e evite clicar em anexos de emails desconhecidos."
            />

            <Details
              title="Atente-se a Mensagens de Email"
              description="Verifique o remetente e a estrutura de texto do email para identificar sinais de phishing."
            />
          </RoadMap>

          <RoadMap title="Etapa 3: Redes Sociais e Compras Online">
            <Details
              title="Configurações de Privacidade"
              description="Revise e ajuste as configurações de privacidade em suas contas de redes sociais para controlar quem pode ver suas informações."
            />

            <Details
              title="Compras Online Seguras"
              description="Utilize apenas sites seguros e confiáveis para fazer compras online. Verifique se há um cadeado na barra de endereços e 'https' antes da URL."
            />
          </RoadMap>

          <RoadMap title="Etapa 4: Senso Crítico">
            <Details
              title="Desconfie de Ofertas Irresistíveis"
              description="Se algo parece bom demais para ser verdade, provavelmente é. Desconfie de promoções exageradas e ofertas milagrosas."
            />

            <Details
              title="Pesquise e Verifique"
              description="Antes de fazer qualquer transação online ou fornecer informações pessoais, pesquise a empresa e verifique sua reputação."
            />

            <Details
              title="Não Compartilhe Informações Pessoais"
              description="Evite compartilhar informações sensíveis, como números de documentos, senhas ou dados bancários, por email ou mensagens."
            />
          </RoadMap>

          <RoadMap title="Etapa 5: Segurança em Dispositivos">
            <Details
              title="Antivírus e Antimalware"
              description="Instale e mantenha um software de segurança confiável em seus dispositivos para proteção contra malware e vírus."
            />

            <Details
              title="Backup Regular"
              description=" Faça backup regularmente dos seus dados importantes em dispositivos externos ou serviços de armazenamento em nuvem seguros."
            />
          </RoadMap>
        </Layout>
      </main>
    </>
  );
}
