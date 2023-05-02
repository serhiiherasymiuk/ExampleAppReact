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
            <label>Nickname</label>
            <input {...register("nickname", { required: true })} type="text" name="nickname" />
            {errors.nickname && <span className="error">Nickname is required</span>}
          </div>
          <div>
            <label>Email</label>
            <input {...register("email", { required: true })} type="text" name="email" />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div>
            <label>Gender</label>
            <input {...register("gender", { required: true })} type="text" name="gender" />
            {errors.gender && <span className="error">Gender is required</span>}
          </div>
          <div>
            <label>Age</label>
            <input {...register("age", { required: true })} type="number" name="age" />
            {errors.age && <span className="error">Age is required</span>}
          </div>
          <div>
            <label>Password</label>
            <input {...register("password", { required: true })} type="password" name="password" />
            {errors.password && <span className="error">Password is required</span>}
          </div>
          <div>
            <label>Photo URL</label>
            <input {...register("photo", { required: true })} type="text" name="photo" />
            {errors.photo && <span className="error">Photo URL is required</span>}
          </div>
          <div>
            <label>Description</label>
            <textarea {...register("description", { required: true })} name="description" />
            {errors.description && <span className="error">Description is required</span>}
          </div>
          <div>
            <label>Tags</label>
            <input {...register("tags", { required: true })} type="text" name="tags" />
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
