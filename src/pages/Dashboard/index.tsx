import React, { useEffect, useState } from "react";
import Slideshow from "react-native-image-slider-show";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import { Container, Viewblock, Quadros } from "./styles";

import Header from "../../Components/Header";
import Boletos from "../../Components/Boletos";
import api from "../../services/api";

const Dashboard: React.FC = () => {
  const B = (props: { children: React.ReactNode }) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  const I = (props: { children: React.ReactNode }) => (
    <Text style={{ fontStyle: "italic" }}>{props.children}</Text>
  );

  return (
    <Container>
      <ScrollView>
        <Header />

        <Viewblock>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5531991655066&text=Gostaria%20de%20falar%20com%20comercial!"
              )
            }
          >
            <Slideshow
              dataSource={[
                {
                  url:
                    "https://siead.faculdadefamart.edu.br/content/upload/banner/3c59dc048e8850243be8079a5c74d079.jpg",
                },
                {
                  url:
                    "https://siead.faculdadefamart.edu.br/content/upload/banner/98f13708210194c475687be6106a3b84.jpg",
                },
              ]}
            />
          </TouchableOpacity>

          <View>
            <Text>
              <B>Paulo Roberto Nogueira de Souza (Teste)</B>, seja bem vindo(a)
              à área de alunos Faculdade Famart.
            </Text>

            <Text>
              Esta é sua página de controle em nossa Escola, nela é possível
              atualizar seu cadastro em nosso banco de dados, ficar ligado em
              nosso mural de recados, receber notícias exclusivas, além de
              acompanhar seu histórico financeiro. Desejamos que fique à
              vontade.
            </Text>
            <Text>
              <I>
                {" "}
                Para navegar em nosso sistema, clique em algum dos itens ao
                lado, como,<B>Meus Dados</B>, por exemplo, após o clique serão
                exibidos os itens do menu escolhido.
              </I>
            </Text>
          </View>
        </Viewblock>

        <Viewblock>
          <View style={{ backgroundColor: "#931313" }}>
            <Text>AVISOS E COMUNICADOS</Text>
          </View>
          <Quadros>
            <Text>
              <B>Tutoria Ead</B>
            </Text>
            <Text>Novidade!</Text>
            <Text>
              Agora você tem à sua disposição mais um recurso pedagógico: a{" "}
              <B>Tutoria Online</B>
            </Text>
            <Text>
              Converse com um professor em tempo real e tenha todas as suas
              dúvidas respondidas.{" "}
              <B> Horário de funcionamento de 09:30 às 17:30 h </B>.
            </Text>
            <Text>
              {" "}
              <B> Como acessar? </B>
            </Text>
            <Text>-Acesse a área do aluno</Text>
            <Text>-No menu esquerdo, escolha a opção "Tutoria EAD"</Text>
            <Text>
              -Se você já tiver aberto um ticket de atendimento, clique em "sim"
              e informe o número do ticket.
            </Text>
            <Text>-Caso seja um novo atendimento, clique em "Não".</Text>
            <Text>Pronto!</Text>
            <Text>Agora basta enviar sua dúvida.</Text>
          </Quadros>
          <Quadros>
            <Text>
              {" "}
              <B> Processo de Certificação</B>
            </Text>
            <Text>
              De acordo com as normas da faculdade, o certificado/declaração de
              conclusão de curso só poderão ser solicitados após a conclusão de
              todos os pilares avaliativos, que são :
            </Text>
            <Text>- Documentos entregues conforme exigências da faculdade</Text>
            <Text>- Avaliações entregues e aprovadas</Text>
            <Text>- TCC cadastrado e aprovado</Text>
            <Text>
              - Estágio concluído e aprovado (quando houver estágio
              supervisionado)
            </Text>
            <Text>- Plano estudantil quitado</Text>
            <Text>- Tempo mínimo de curso</Text>
            <Text>Atenciosamente Equipe Famart.</Text>
          </Quadros>
          <Quadros>
            <Text>
              {" "}
              <B> Emissão da Carteirinha de Estudantil.</B>
            </Text>
            <Text>Prezados (as) alunos (as),</Text>
            <Text>
              Para que seja feita a solicitação da carteira nacional de
              identificação estudantil, o (a) aluno (a), deverá efetuar o
              pagamento da taxa no valor de R$40,00 reais,{" "}
              <B> e o envio da foto 3x4 e do RG.</B>
            </Text>
            <Text>
              Após esses critérios finalizados,{" "}
              <B>
                {" "}
                o prazo para recebimento é de 45 dias úteis, com vencimento em
                março de 2021 de acordo com a LEI FEDERAL N° 12.933 DE 26 DE
                DEZEMBRO DE 2013.
              </B>
            </Text>
            <Text>Cordialmente,</Text>
            <Text>Equipe IPB</Text>
          </Quadros>
        </Viewblock>
        <Viewblock>
          <View style={{ backgroundColor: "#60747C" }}>
            <Text>PRAZOS DE ENTREGA E ORIENTAÇÕES</Text>
          </View>
          <Quadros>
            <Text>
              <B>
                As provas de recuperação devem ser impressas, corretamente
                preenchidas, respondida manualmente com caneta azul ou preta,
                escaneadas e enviadas para o e-mail avaliacao@famart.edu.br
              </B>
            </Text>
          </Quadros>
          <View>
            <Quadros>
              <Text>
                TCC – Trabalho de conclusão de curso (Envio para correção
                final), cadastrado dentro do portal acadêmico do aluno em TCC na
                aba esquerda ao lado desta pagina.
              </Text>
            </Quadros>
            <Quadros>
              <Text>
                Após 150 dias de curso, contando a partir da data de pagamento
                da sua taxa de inscrição e 80% do curso quitado.
              </Text>
            </Quadros>
            <Quadros>
              <Text>
                Correção de TCC Mínimo 15 dias úteis - Máximo 20 dias úteis
              </Text>
            </Quadros>
          </View>
          <View>
            <Quadros>
              <Text>Certificado/Declaração Pós Graduação</Text>
            </Quadros>
            <Quadros>
              <Text>
                Mínimo 15 dias úteis - Máximo 60 dias úteis após a conclusão do
                seu curso.
              </Text>
            </Quadros>
          </View>
          <Quadros>
            <Text>
              {" "}
              O TCC pode ser enviado para acompanhamento Tutoria/Orientação após
              150 dias de curso (contando-se a partir da data de pagamento da
              taxa de inscrição) e para correção final com 80% do curso quitado.
              É fundamental ressaltar que o TCC deve ser cadastrado na "Área do
              Aluno" em "TCC", no formato Word (.doc), e não será aceito o envio
              por e-mail.
            </Text>
          </Quadros>
          <View>
            <Quadros>
              <Text>Entrega da Documentação</Text>
              <View>
                <Quadros>
                  <Text>
                    Prazo máximo de 90 dias contando a partir da data de
                    pagamento da sua taxa de inscrição.
                  </Text>
                </Quadros>
                <Quadros>
                  <Text>Pós-Graduação</Text>
                  <Text>Diploma da 1ª Graduação (cópia simples)</Text>
                  <Text>Histórico da 1ª Graduação (cópia simples)</Text>
                  <Text>
                    RG, CPF, Comprovante de Residência, Certidão de Nascimento
                    ou Casamento, Foto 3x4 (cópias simples, legíveis e sem
                    informações cortadas)
                  </Text>
                </Quadros>
              </View>
            </Quadros>
          </View>
          <View>
            <Boletos />
          </View>
        </Viewblock>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
