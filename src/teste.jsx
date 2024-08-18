import axios from "axios";
import React from "react";

export function Teste() {
    async function handlePost() {
        try {
            const response = await axios.post("http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signin", {
                "identifier": "gabrielben1414@gmail.com",
                "password": "GabrielBen@07"
            });
            console.log("Response:", response);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    async function handlePost2() {
        try {
            const response = await axios.post("http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signup",{
                "id": 2,
                "username": "Gabriel",
                "fullName": "Gabriel Ben",
                "email": "gabrielben1414@gmail.com",
                "password": "GabrielBen@07",
                "gender": "masculino",
                "nationality": "americano",
                "accountNonExpired": true,
                "accountNonLocked": true,
                "credentialsNonExpired": true,
                "enabled": true,
                "roles": [
                  "Gerente"
                ],
                "authorities": [
                  {
                    "authority": "string"
                  }
                ],
                "_links": {
                  "additionalProp1": {
                    "href": "string",
                    "hreflang": "string",
                    "title": "string",
                    "type": "string",
                    "deprecation": "string",
                    "profile": "string",
                    "name": "string",
                    "templated": true
                  },
                  "additionalProp2": {
                    "href": "string",
                    "hreflang": "string",
                    "title": "string",
                    "type": "string",
                    "deprecation": "string",
                    "profile": "string",
                    "name": "string",
                    "templated": true
                  },
                  "additionalProp3": {
                    "href": "string",
                    "hreflang": "string",
                    "title": "string",
                    "type": "string",
                    "deprecation": "string",
                    "profile": "string",
                    "name": "string",
                    "templated": true
                  }
                }
              });
            console.log("Response:", response);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <button onClick={handlePost}>Enviar</button>
            <button onClick={handlePost2}>Enviar</button>

        </>
    );
}
