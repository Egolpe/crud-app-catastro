import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const FormPredio = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
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
        <Form.Item label="Avaluo" required>
          <Input />
        </Form.Item>
        <Form.Item label="Nombre" required>
          <Input />
        </Form.Item>
        <Form.Item label="Departamento" required>
          <Input />
        </Form.Item>
        <Form.Item label="Municipio" required>
          <Input />
        </Form.Item>
        <Form.Item type="submit">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPredio;
