import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  Picker,
  View,
  Linking,
} from "react-native";
import Input from "../../Components/Input";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useAuth } from "../../hooks/Auth";
import { Container, View2 } from "./styles";

import Conta from "../../assets/conta.png";
import chapeu from "../../assets/chapeu.png";
import Curriculum from "../../assets/curriculum.png";
import normalize from "../../utils/normalize";

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const formRef = useRef<FormHandles>(null);
  const [selectedValue, setSelectedValue] = useState("Pós-Graduação");
  const { singIn } = useAuth();
  const handleSignUp = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        usuario: Yup.string()
          .required("Cpf requerido")
          .min(10, "Cpf precisa de 11 digito"),

        senha: Yup.string()
          .required("Senha requerida")
          .min(5, "Senha muito curta"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await singIn(data);
    } catch (err) {
      const validationErrors: any = {};
      if (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current?.setErrors(validationErrors);
          return;
        }
      }
    }
  }, []);

  return (
    <Container>
      <Image
        source={{
          uri:
            "https://www.famart.edu.br/wp-content/uploads/2020/03/Famart-Logo-azul-fundo-transp.png",
        }}
        style={{ height: normalize(106), width: normalize(280) }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: normalize(10),
        }}
      >
        <View
          style={{
            alignItems: "center",
            maxWidth: normalize(105),
          }}
        >
          <Image
            style={{ height: normalize(30), width: normalize(28) }}
            source={chapeu}
          />
          <Text>Conteudo On-</Text>
          <Text>Line</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            maxWidth: normalize(195),
            marginLeft: normalize(10),
          }}
        >
          <Image
            style={{ height: normalize(30), width: normalize(28) }}
            source={Conta}
          />
          <Text style={{ fontSize: normalize(16) }}>Requerimentos</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            maxWidth: normalize(95),
            marginLeft: normalize(10),
          }}
        >
          <Image
            style={{
              height: normalize(30),
              width: normalize(28),
            }}
            source={Curriculum}
          />
          <Text>2ª Via Boleto</Text>
        </View>
      </View>
      <View2>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: normalize(30),
            width: normalize(320),
            borderRadius: normalize(10),
            paddingLeft: normalize(5),
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Pós-Graduação" value="Pós-Graduação" />
        </Picker>
      </View2>

      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          maxLength={11}
          name="usuario"
          keyboardType="numeric"
          placeholder="CPF"
        />
        <Input name="senha" secureTextEntry={true} placeholder="Senha" />

        <View style={{ marginTop: normalize(8) }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#1f80e1",
              height: normalize(38),
              width: normalize(320),
              borderRadius: normalize(10),
            }}
            onPress={() => formRef.current?.submitForm()}
          >
            <Text
              style={{
                color: "#fff",
                marginTop: normalize(10),
                marginLeft: normalize(8),
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </Form>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: normalize(8),
        }}
      >
        <Text
          onPress={() => navigation.navigate("Reset")}
          style={{ fontSize: normalize(15), marginRight: normalize(5) }}
        >
          Esqueci minha senha
        </Text>
        <Text style={{ fontSize: normalize(15), marginRight: normalize(5) }}>
          |
        </Text>
        <Text
          onPress={() =>
            Linking.openURL("https://siead.faculdadefamart.edu.br/aluno/conta#")
          }
          style={{ fontSize: normalize(15) }}
        >
          Atendimento ao Aluno
        </Text>
      </View>
    </Container>
  );
};

export default HomeScreen;
