import "./style.css"

import { useRef, useState } from "react";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NavLink } from "../../components/NavLink";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { PageSection } from "../../components/PageSection";
import { FormContainer } from "../../components/FormContainer";
import { FormField } from "../../components/FormField";

import emailjs from "@emailjs/browser";

import { Home, Package, Phone, ArrowBigLeftDash, Verified } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { SuccessMessage } from "../../components/SuccessMessage";

export default function Orcamento({ count, info }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("foo");
    }, 2000);
  });

  async function submitForm(e, info, userName, userNumber, userEmail) {

    e.preventDefault();

    const fields = [userName, userNumber, userEmail];

    console.log("Dados do Orçamento:");
    console.log("Nome: ", userName.current.value);
    console.log("Celular: ", parseInt(userNumber.current.value));
    console.log("E-mail: ", userEmail.current.value);
    console.log(info)

    const userInfo = info.filter((item) => item.id);

    let userMessage = [];
    // userMessage = userMessage.join("\n");

    userInfo.forEach((item) => {
      userMessage.push(`
          <tr>
            <td style="border-collapse: collapse; padding: 10px;">
              ${item.name}
            </td>
            <td style="border-collapse: collapse; padding: 10px;">
              ${item.quantity}
            </td>
            <td style="border-collapse: collapse; padding: 10px;">
              ${item.code}
            </td>
          </tr>
      `)
    });

    userMessage = userMessage.join("");


    const templateParams = {
      from_name: userName.current.value,
      my_html: `
          <h1>Orçamento de ${userName.current.value}</h1>
          <h2>Produtos</h2>

          <table border="1" style="border-collapse: collapse; text-align: left; padding: 10px;">
            <tr>
              <th style="border-collapse: collapse; padding: 10px;">
                Produto
              </th>
              <th style="border-collapse: collapse; padding: 10px;">
                Quantidade
              </th>
              <th style="border-collapse: collapse; padding: 10px;">
                Código
              </th>
            </tr>
            ${userMessage}
          </table>

          <br/>
          <section>
            <strong style="font-size: 1.4rem;">Dados</strong>
            <p><strong>Nome: </strong>${userName.current.value}</p>
            <p><strong>Celular: </strong>${userNumber.current.value}</p>
            <p><strong>Email: </strong>${userEmail.current.value}</p>
          </section>
        `,
    };

    try {
      setLoading(true);
      // await sendEmail(templateParams).then((response) =>
      //   wasEmailSent(true, response)
      // );
      return myPromise.then((response) =>
        wasEmailSent(true, response)
      );
    } catch (error) {
      setError(true)
      wasEmailSent(false, error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setError(false)
        clearFormFields(fields);
        localStorage.clear();
      }, 2000);
      console.log(error);
    }
  }

  async function sendEmail(params) {
    return await emailjs.send(
      "service_51f3k2q",
      // "template_yuxwwmd",
      "template_in0gwca",
      params,
      "HLq9wQVu8t5vZ6pBP"
    );
  }

  function wasEmailSent(isSent, responseOrError) {
    if (isSent) {
      console.log(
        "Email enviado!",
        responseOrError.status,
        responseOrError.text
      );
    } else {
      console.error("ERRO: ", responseOrError);
    }
  }

  function clearFormFields(fields) {
    fields.forEach((field) => (field.current.value = ""));
  }

  const userNumber = useRef(0);
  const userEmail = useRef("");
  const userName = useRef("");

  return (
    <>
      {/* <Button onClick={() => localStorage.clear()}>Limpar Dados</Button> */}
      <Header count={count} />
      <Menu>
        <NavLink icon={<Home size={16} />} label="home" />
        <NavLink icon={<Package size={16} />} label="equipamentos" />
        <NavLink icon={<Phone size={16} />} label="contato" />
      </Menu>

      <Main>
        <PageHeader title="Orçamento" text={"Preencha os seus dados e solicite já seu orçamento!"} />
        <PageSection>
          <a href="/meu-carrinho">
              <Button className="back-btn" variant="soft" color="gray">
              <ArrowBigLeftDash size={18} />
              <span>Voltar</span>
            </Button>
          </a>

          <FormContainer
            hasError={error}
            isLoading={loading}
            submitLabel="ENVIAR ORÇAMENTO"
            onSubmit={async () =>
              await submitForm(event, info, userName, userNumber, userEmail)
            }
          >
            <FormField
              elementRef={userName}
              name={"text"}
              label={"Nome e Sobrenome"}
              messageForMismatch="nome inválido"
              messageForMissing="preencha com seu celular"
              placeholder="João Silva"
            />
            <FormField
              elementRef={userNumber}
              name={"number"}
              label={"Celular"}
              messageForMismatch="celular inválido"
              messageForMissing="preencha com seu celular"
              placeholder=" 9 8888 8888"
            />
            <FormField
              elementRef={userEmail}
              name={"email"}
              label={"E-mail"}
              messageForMismatch="e-mail inválido"
              messageForMissing="preencha com seu e-mail"
              placeholder="joaosilva@gmail.com"
            />
          </FormContainer>

          {error === false && <SuccessMessage />}

        </PageSection>
      </Main>
    </>
  );
}
