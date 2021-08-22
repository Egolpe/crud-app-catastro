import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Row,
  Col,
} from "antd";

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
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
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
              <Form.Item label={typeEntity}>
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
              <Form.Item label="Número de documento">
                <Input />
              </Form.Item>
              <Form.Item label="Nombres">
                <Input />
              </Form.Item>
              <Form.Item label="Apellidos">
                <Input />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item label={typeEntity}>
                <Input />
              </Form.Item>
              <Form.Item label="Razón social">
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
      <Form.Item name="checkbox-group" label="Terrenos">
        <Checkbox.Group>
          <Row>
            <Col span={6}>
              <Checkbox value="water" style={{ lineHeight: "32px" }}>
                Cerca de fuentes de agua
              </Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="rural" style={{ lineHeight: "32px" }}>
                Rural
              </Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="urban" style={{ lineHeight: "32px" }}>
                Urbano
              </Checkbox>
            </Col>
            <Col span={6}>
              <Checkbox value="construction" style={{ lineHeight: "32px" }}>
                Tiene construcciones en él
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [
                {
                  title: "Bamboo",
                  value: "bamboo",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default FormSizeDemo;
