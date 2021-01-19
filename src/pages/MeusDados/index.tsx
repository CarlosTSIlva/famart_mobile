import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Button,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import * as ImagePicker from "expo-image-picker";
import { Form } from "@unform/mobile";
import { useAuth } from "../../hooks/Auth";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import { Container, View2 } from "./styles";

const MeusDados: React.FC = () => {
  const [image, setImage] = useState(null);
  const [nascimento, setNascimento] = useState({
    data_nascimento: "",
  });
  const [telefone, setTelefone] = useState({
    telefone1: "",
    telefone2: "",
    telefone3: "",
  });

  const { dados } = useAuth();

  useEffect(() => {
    function adicionaZero(numero: any) {
      if (numero <= 9) return "0" + numero;
      else return numero;
    }
    let dataAtual = new Date(dados.data_nascimento); //29/01/2020
    let dataAtualFormatada =
      adicionaZero(dataAtual.getDate().toString()) +
      "/" +
      adicionaZero(dataAtual.getMonth() + 1).toString() +
      "/" +
      dataAtual.getFullYear();

    setNascimento({
      data_nascimento: dataAtualFormatada,
    });

    let a = dados?.telefone.split(/\s*;\s*/);
    setTelefone({
      telefone1: a[0],
      telefone2: a[1],
      telefone3: a[2],
    });

    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpe preciso de permição para trabalhar");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  let sexoSelect = dados?.sexo;
  return (
    <ScrollView>
      <Header />
      <Container>
        <Text>Meus Dados</Text>

        <Form onSubmit={() => {}}>
          <View>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: "35%",
                }}
              />
            )}
            <Button title="Coloque sua imagem" onPress={pickImage} />
          </View>
          <View>
            <Text>Matrícula</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.matricula}</Text>
            </Input>

            <Text>Nome</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.nome}</Text>
            </Input>

            <Text>RG/Identidade</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.rg}</Text>
            </Input>

            <Text>CPF</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.cpf}</Text>
            </Input>

            <Text>Data de Nascimento</Text>
            <Input name="Cpf" editable={false}>
              <Text>{nascimento?.data_nascimento}</Text>
            </Input>

            <Text>Sexo</Text>
            <View2>
              <Picker
                enabled={false}
                selectedValue={sexoSelect}
                style={{
                  height: 50,
                  width: 290,
                  marginTop: -8,
                  marginLeft: 8,
                  color: "#acacac",
                }}
              >
                <Picker.Item label="Feminino" value={2} />
                <Picker.Item label="Masculino" value={1} />
              </Picker>
            </View2>

            <Text>Nome do Pai</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.pai}</Text>
            </Input>

            <Text>Nome do Mãe</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.mae}</Text>
            </Input>

            <Text>Email</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.email}</Text>
            </Input>

            <Text>Nacionalidade</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.nacionalidade}</Text>
            </Input>

            <Text>Naturalidade</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.naturalidade}</Text>
            </Input>

            <Text>Curso de Graduação</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.graduacao_curso}</Text>
            </Input>

            <Text>Instituição Graduação</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.graduacao_instituicao}</Text>
            </Input>

            <Text>Ano Formação</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.graduacao_ano}</Text>
            </Input>

            <Text>CEP</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.cep}</Text>
            </Input>

            <Text>Logradouro</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.logradouro}</Text>
            </Input>

            <Text>Número</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.numero}</Text>
            </Input>

            <Text>Complemento</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.complemento}</Text>
            </Input>

            <Text>Bairro</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.bairro}</Text>
            </Input>

            <Text>Cidade</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.cidade}</Text>
            </Input>

            <Text>UF</Text>
            <Input name="Cpf" editable={false}>
              <Text>{dados?.estado}</Text>
            </Input>

            <Text>Telefone Residencial</Text>
            <Input name="Cpf" editable={false}>
              <Text>{telefone.telefone1}</Text>
            </Input>

            <Text>Telefone Celular</Text>
            <Input name="Cpf" editable={false}>
              <Text>{telefone.telefone2}</Text>
            </Input>

            <Text>Telefone Comercial</Text>
            <Input name="Cpf" editable={false}>
              <Text>{telefone.telefone3}</Text>
            </Input>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#1f80e1",
                height: 38,
                marginTop: 10,
                marginBottom: 10,

                width: 280,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginTop: 10,
                  marginLeft: 8,
                }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default MeusDados;
