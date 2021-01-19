import React, { useCallback, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
  Linking,
} from "react-native";
import Input from "../../Components/Input";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { Container, View2 } from "./styles";
import * as Yup from "yup";
import normalize from "../../utils/normalize";

interface Props {
  navigation: any;
}

const ResetPassword: React.FC<Props> = ({ navigation }) => {
  const formRef = useRef<FormHandles>(null);

  const supportedURL = "https://siead.faculdadefamart.edu.br/aluno/conta#";
  const handleSignUp = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cpf: Yup.string().min(10, "Preencha um dos campos"),

        email: Yup.string().email("Preencha um dos campos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors: any = {};
      if (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current?.setErrors(validationErrors);
        }
        Alert.alert(
          "Erro no login",
          "Ocorreu um erro ao fazer longin, cheque as credenciais"
        );
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
        style={{ height: normalize(105), width: normalize(280) }}
      />

      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          maxLength={normalize(11)}
          name="cpf"
          keyboardType="numeric"
          placeholder="CPF"
        />
        <View2>
          <Text>OU</Text>
        </View2>
        <Input
          name="email"
          keyboardType="email-address"
          placeholder="Informe seu Email"
        />

        <View
          style={{
            marginTop: normalize(8),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#1f80e1",
              height: normalize(33),
              width: normalize(320),
              borderRadius: normalize(10),
            }}
            onPress={() => formRef.current?.submitForm()}
          >
            <Text
              style={{
                color: "#fff",
                marginTop: normalize(6),
                marginLeft: normalize(77),
              }}
            >
              RECUPERAR SENHA
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
          onPress={() => navigation.navigate("Home")}
          style={{ marginRight: normalize(5), fontSize: normalize(15) }}
        >
          Eu lembrei a senha!
        </Text>
        <Text style={{ marginRight: normalize(5), fontSize: normalize(15) }}>
          |
        </Text>
        <Text
          style={{ fontSize: normalize(15) }}
          onPress={() =>
            Linking.openURL("https://siead.faculdadefamart.edu.br/aluno/conta#")
          }
        >
          Atendimento ao Aluno
        </Text>
      </View>
    </Container>
  );
};

export default ResetPassword;
