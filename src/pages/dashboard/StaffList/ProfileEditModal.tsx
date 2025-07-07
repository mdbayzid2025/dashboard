import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { LuCalendarRange } from 'react-icons/lu';
import { PiImageThin } from 'react-icons/pi';

const ProfileEditModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void; }) => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [form] = Form.useForm();


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        designation: "Manager" // Set default value here
      });
    }
  }, [isOpen, form]);

  const onFinish = (values: any) => {
    console.log('Form values:', values);    
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    form.resetFields();
    setImgFile(null);
    setImageUrl(undefined);
  }
  return (
    <div className="rounded-xl">
    <Modal
      closable={{ 'aria-label': 'Custom Close Button' }}
      centered
      width={800}
      open={isOpen}      
      onCancel={handleCancel}
      footer={null}      
    >

      <Form
      form={form}
        layout='vertical'
        onFinish={onFinish}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-5 mt-5">
          <div className="md:col-span-2">
            {/* ------------------ Image Upload ------------------ */}
            <div className="mb-4 w-full md:w-1/2">
              <p className="text-[16px] font-medium py-1 text-[#636363]">Profile Photo</p>
              <label htmlFor="image" className=" border border-[#BABABA] rounded-lg w-[98%] bg-white cursor-pointer block">
                <div className="flex justify-center items-center w-full h-[100px] rounded-lg">
                  {imageUrl ? (
                    <img src={imageUrl} style={{ height: "100px", width: "100%", borderRadius: 8, objectFit: "fill" }} alt="class" />
                  ) : (
                    <div className='flex flex-col items-center '>
                      <PiImageThin className="text-6xl text-[#666666] " />
                      <p className='text-lg font-medium text-[#636363]'>Upload Image</p>
                    </div>
                  )}
                </div>
              </label>
              <div className="hidden">
                <input id="image" type="file" accept="image/*" onChange={handleChange} className=" hidden" />
              </div>
            </div>
          </div>
          <Form.Item label={<p className="text-[16px] font-medium py-1 text-[#636363]">Name</p>}
            rules={[{ required: true, message: 'Please input your field Name' }]} name='name'
          >
            <Input name='name' style={{ height: 42 }} placeholder="Your Name" />
          </Form.Item>

          <Form.Item label={<p className="text-[16px] font-medium py-1 text-[#636363]">Date of Birth</p>} rules={[{required: true, message: 'Please select a date' }]} name='dob'>
            <DatePicker name='dob' placeholder='Date of Birth' suffixIcon={<LuCalendarRange size={24} color="#121212"/>} style={{width: "100%", height: 42}}/>
          </Form.Item>

          <Form.Item label={<p className="text-[16px] font-medium py-1 text-[#636363]">Designation</p>}
            rules={[{ message: 'Your Designation' }]} name='designation'
          >
            <Input disabled defaultValue="Manager" name='designation' style={{ height: 42 }} placeholder="Manager" />
          </Form.Item>
          <Form.Item name="Select" label={<p className="text-[16px] font-medium py-1 text-[#636363]">Gender</p>}
           rules={[{ required: true, message: 'Please input!' }]} 
          >
            <Select  defaultValue="" style={{ height: 42 }} placeholder="Your Name" >
              <Select.Option value="" style={{height: 42}}>Select</Select.Option>
              <Select.Option value="Male" style={{height: 42}}>Male</Select.Option>
              <Select.Option value="Female" style={{height: 42}}>Female</Select.Option>
              <Select.Option value="Other" style={{height: 42}}>Other</Select.Option>              
            </Select>
          </Form.Item>
          <Form.Item label={<p className="text-[16px] font-medium py-1 text-[#636363]">Contact</p>}
             name='contact' rules={[{ required: true, message: 'Your Contact Number' }]} 
          >
            <Input name='contact' style={{ height: 42 }} placeholder="Your Contact Number" />
          </Form.Item>
          <Form.Item label={<p className="text-[16px] font-medium py-1 text-[#636363]">Address</p>}
            rules={[{ required: true, message: 'Enter Your Address' }]} name='address'
          >
            <Input name='address' style={{ height: 42 }} placeholder="Your Address" />
          </Form.Item>
        </div>
        <div className="flex justify-center mt-3">
        <Button type='primary' size='large' htmlType="submit">Save & Change</Button>
        </div>
      </Form>
    </Modal>
    </div>
  )
}

export default ProfileEditModal;