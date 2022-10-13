import { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    return; //todo: implemente firebase account creation, sending name, email and password
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Register;
