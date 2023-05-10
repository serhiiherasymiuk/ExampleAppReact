import './Authorization.css';
import { useForm } from "react-hook-form";

export function Authorization() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newAccount = {
      nickname: data.nickname,
      email: data.email,
      gender: data.gender,
      age: data.age,
      password: data.password,
      photo: data.photo,
      description: data.description,
      tags: data.tags
    };
    console.log(newAccount)
  };

  return (
    <div className="Authorization">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input placeholder='Nickname' {...register("nickname", { required: true })} type="text" name="nickname" />
            {errors.nickname && <span className="error">Nickname is required</span>}
          </div>
          <div>
            <input placeholder='Email' {...register("email", { required: true })} type="text" name="email" />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div>
            <input placeholder='Gender' {...register("gender", { required: true })} type="text" name="gender" />
            {errors.gender && <span className="error">Gender is required</span>}
          </div>
          <div>
            <input placeholder='Age' {...register("age", { required: true })} type="number" name="age" />
            {errors.age && <span className="error">Age is required</span>}
          </div>
          <div>
            <input placeholder='Password' {...register("password", { required: true })} type="password" name="password" />
            {errors.password && <span className="error">Password is required</span>}
          </div>
          <div>
            <input placeholder='Photo URL' {...register("photo", { required: true })} type="text" name="photo" />
            {errors.photo && <span className="error">Photo URL is required</span>}
          </div>
          <div>
            <textarea placeholder='Description' {...register("description", { required: true })} name="description" />
            {errors.description && <span className="error">Description is required</span>}
          </div>
          <div>
            <input placeholder='Tags' {...register("tags", { required: true })} type="text" name="tags" />
            {errors.tags && <span className="error">Tags is required</span>}
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
