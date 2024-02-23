import { useFormik } from "formik";

const About = () => {
    const formik = useFormik({
        initialValues: {
            name: "Karthik",
            email: "karthi@gmail.com",
        }
    });
    return (<div>
        <form>
            <label>Name</label>
            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}></input>
            <label>email</label>
            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}></input>
        </form>
    </div>)
};

export default About;