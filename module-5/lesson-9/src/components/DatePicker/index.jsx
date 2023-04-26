import { DatePicker,  } from 'antd';


const index = () => {

    const { RangePicker } = DatePicker;

    return (
        <>
          <RangePicker onChange={(e)=>console.log(e)} picker="month" />
        </>
    );
};

export default index;