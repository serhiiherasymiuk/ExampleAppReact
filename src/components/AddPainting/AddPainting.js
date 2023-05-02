import './AddPainting.css';
import { useForm } from "react-hook-form";

export function AddPainting(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newPainting = {
      title: data.title,
      description: data.description,
      src: data.src,
      author: data.author,
      year: data.year,
    };
    props.onAddImage(newPainting);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder='Title' {...register("title", { required: true })} type="text" name="title" />
          {errors.title && <span className="error">Title is required</span>}
        </div>
        <div>
          <input placeholder='Description' {...register("description", { required: true })} type="text" name="description" />
          {errors.description && <span className="error">Description is required</span>}
        </div>
        <div>
          <input placeholder='Image URL' {...register("src", { required: true })} type="text" name="src" />
          {errors.src && <span className="error">Image URL is required</span>}
        </div>
        <div>
          <input placeholder='Author' {...register("author", { required: true })} type="text" name="author" />
          {errors.author && <span className="error">Author is required</span>}
        </div>
        <div>
          <input placeholder='Year' {...register("year", { required: true, min: 1000, max: 2023 })} type="number" name="year" />
          {errors.year?.type === "required" && <span className="error">Year is required</span>}
          {errors.year?.type === "max" && <span className="error">Year should be before {(new Date).getFullYear()}</span>}
        </div>
        <div>
          <button type="submit">Add Painting</button>
        </div>
      </form>
    </div>
  );
}
