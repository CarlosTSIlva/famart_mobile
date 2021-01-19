import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, ScrollView } from "react-native";

const Boletos: React.FC = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={{ marginLeft: 5, marginBottom: 10 }}>
        <Card style={{ width: 280, padding: 6 }}>
          <Card.Title title="BOLETOS EM ABERTO" />
          <Card.Content>
            <Title>Matricula</Title>
            <Paragraph>
              Carteira de Estudante - Parcela 1 de 1 Referente ao curso: Núcleo
              Comum
            </Paragraph>
            <Paragraph>Vencimento: 19/10/2020</Paragraph>
            <View style={{ flexDirection: "row" }}>
              <Paragraph>Valor(R$): 1.00</Paragraph>
              <Paragraph>{"   "}Status: Vencido</Paragraph>
            </View>
          </Card.Content>
          <View style={{ alignContent: "center", alignItems: "center" }}>
            <Card.Actions>
              <Card.Cover
                style={{ height: 60, width: 50 }}
                source={{
                  uri:
                    "https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-printer-vector-icon-png-image_1824211.jpg",
                }}
              />
              <Button>imprimir</Button>
            </Card.Actions>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Boletos;
