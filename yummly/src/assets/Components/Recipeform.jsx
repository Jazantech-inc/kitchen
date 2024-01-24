import {
  Form,
  Input,
  Modal,
  Select,
  Radio,
  message,
  Upload,
  Tooltip,
  Button,
} from "antd";
const { TextArea } = Input;
import React, { useEffect, useRef, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../Redux/Slice/Loader"
import { AddRecipe, UpdateRecipe, uploadRecipeImage } from "../apicall/recipes";
const { Dragger } = Upload;

// number input Numaric input
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <>
      {/* <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input"> */}
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="ex: 4"
        maxLength={16}
      />
      {/* </Tooltip> */}
    </>
  );
};


const Recipeform = ({ showForm, setShowform,selectedRecipe,fetchData }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users)
  const [value, setValue] = useState("");
  const [showPreview,setShowPreview] = useState(true)
  const [file, setFile] = useState(null)
  const [images, setImages] = useState([]) 





  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      // formData.append('images', values.images.fileList[0].originFileObj);
      dispatch(SetLoader(true))
      let response = null
      if(selectedRecipe){
        response = await UpdateRecipe(selectedRecipe._id,values)
      }else{
        values.user = user._id
        response = await AddRecipe(values)
      }
      dispatch(SetLoader(false))
      if (response.success) {
        message.success(response.message);
        fetchData();
        setShowform(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const formref = useRef(null);

  useEffect(()=>{
    if(selectedRecipe){
      formref.current.setFieldsValue(selectedRecipe)
    }
  },[selectedRecipe])


  return (
    <div>
      <Modal
        title={selectedRecipe?"Update Recipe":"Add Recipe"}
        open={showForm}
        onCancel={() => setShowform(false)}
        centered
        width={1000}
        okText="Save Recipe"
        onOk={() => {
          formref.current.submit();
        }}
        
      >
         <h1 className="text-primary text-2xl text-center font-semibolf uppercase">
          {selectedRecipe ? "Update Recipe" : "Add Recipe"}
        </h1>
        <Form layout="vertical" ref={formref} onFinish={onFinish}>
          <Form.Item
            label="Recipe Name"
            name="recipename"
            rules={[{ required: true,message:"Required" }]}
          >
            <Input type="text"  placeholder="Recipe Name" />
          </Form.Item>

          {/* <Form.Item
            label="Dish Type"
            name="dishtype"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{width: 200}}
              placeholder="Select Dish Type"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                { value: "Main Dish", label: "Main Dish"},
                {value: "Side Dish",label: "Side Dish"},
                {value: "Appetizer",label: "Appetizer"},
                {value: "Soup",label: "Soup"},
                {value: "Salad",label: "Salad"},
                {value: "Dessert",label: "Dessert"},
                {value: "Drink",label: "Drink"},
              ]}
            />
          </Form.Item> */}

          <Form.Item
            label="Preparation Time"
            name="preparationtime"
            rules={[{ required: true }]}
          >
            <Input placeholder="ex: 20 mins" />
          </Form.Item>

          <Form.Item
            label="No. of Servings"
            name="serving"
            rules={[{ required: true }]}
          >
            <NumericInput
              style={{width: 120}}
              value={value}
              onChange={setValue}
            />
          </Form.Item>

          <Form.Item
            label="Cooking Time"
            name="cookingtime"
            rules={[{ required: true }]}
          >
            <Input placeholder="ex: 45 mins" />
          </Form.Item>

          <Form.Item
            label="Shelf Life (Daily)"
            name="shelf"
            rules={[{ required: true }]}
          >
            <NumericInput
              style={{width: 120}}
              value={value}
              onChange={setValue}
            />
          </Form.Item>

          <Form.Item
            label="Difficulty"
            name="difficulty"
            rules={[{ required: true }]}
          >
            <Radio.Group name="radiogroup">
              <Radio value={"Easy"}>Easy</Radio>
              <Radio value={"Moderate"}>Moderate</Radio>
              <Radio value={"Hard"}>Hard</Radio>
            </Radio.Group>
          </Form.Item>

          {/* <Form.Item label="Image" name="images" rules={[{ required: true }]}>
          <Dragger 
          name="images"
          fileList={file}
          listType="picture"
          beforeUpload={(file) => {
            setFile([file]);
            return false; // Prevent automatic upload
          }}
          multiple
          
          >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
          </Form.Item> */}

          <Form.Item
            label="Ingredients"
            name="ingredients"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Directions"
            name="directions"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Recipeform;
