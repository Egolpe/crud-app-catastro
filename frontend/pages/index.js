import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, Row, Col } from "antd";

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [typeEntity, setTypeEntity] = useState(null);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onEntityChange = (value) => {
    value === "naturales"
      ? setTypeEntity("tipo de documento")
      : setTypeEntity("NIT");
  };

  console.log(typeEntity);
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={"large"}
    >
      <Form.Item label="tipo de persona">
        <Select onSelect={(e) => onEntityChange(e)}>
          <Select.Option value="naturales">Persona natural</Select.Option>
          <Select.Option value="juridicas">Persona Jurídica</Select.Option>
        </Select>
      </Form.Item>

      {typeEntity !== null && (
        <>
          {typeEntity === "tipo de documento" ? (
            <>
              <Form.Item label={typeEntity} required>
                <Select>
                  <Select.Option value="cedula">Cédula</Select.Option>
                  <Select.Option value="pasaporte">Pasaporte</Select.Option>
                  <Select.Option value="identidad">
                    Tarjeta de Identidad
                  </Select.Option>
                  <Select.Option value="extranjeria">
                    Cédula de Extranjería
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Número de documento" required>
                <Input />
              </Form.Item>
              <Form.Item label="Nombres" required>
                <Input />
              </Form.Item>
              <Form.Item label="Apellidos" required>
                <Input />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item label={typeEntity} required>
                <Input />
              </Form.Item>
              <Form.Item label="Razón social" required>
                <Input />
              </Form.Item>
            </>
          )}
        </>
      )}
      <Form.Item label="Dirección" required>
        <Input />
      </Form.Item>
      <Form.Item label="Teléfono" required>
        <Input />
      </Form.Item>
      <Form.Item label="Correo Electrónico">
        <Input />
      </Form.Item>
      <Form.Item label="Número de pisos" required>
        <Input />
      </Form.Item>
      <Form.Item label="Área total" required>
        <Input />
      </Form.Item>
      <Form.Item label="Tipo de construcción" required>
        <Select>
          <Select.Option value="industrial">Industrial</Select.Option>
          <Select.Option value="comercial">Comercial</Select.Option>
          <Select.Option value="residencial">Residencial</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Dirección" required>
        <Input />
      </Form.Item>
      <Form.Item label="Área" required>
        <Input />
      </Form.Item>
      <Form.Item label="Valor comercial" required>
        <Input />
      </Form.Item>
      <Form.Item name="checkbox-group" label="Terrenos">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="water" style={{ lineHeight: "32px" }}>
                Cerca de fuentes de agua
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="rural" style={{ lineHeight: "32px" }}>
                Rural
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="urban" style={{ lineHeight: "32px" }}>
                Urbano
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Construcciones en él" required>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button>Enviar</Button>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </Form.Item>
    </Form>
  );
};

export default FormSizeDemo;
