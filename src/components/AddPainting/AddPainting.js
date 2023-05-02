import './AddPainting.css';
import { useForm } from "react-hook-form";

export function AddPainting(props) {
  const onSubmit = (data) => {
    const newPainting = {
      title: data.title,
      description: data.description,
      src: data.src,
      genre: data.genre,
      author: data.author,
      year: data.year,
    };
    props.onAddImage(newPainting);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title")} type="text" name="title" />
        </div>
        <div>
          <label>Description</label>
          <input {...register("description")} type="text" name="description" />
        </div>
        <div>
          <label>Image URL</label>
          <input {...register("src")} type="text" name="src" />
        </div>
        <div>
          <label>Genre</label>
          <input {...register("genre")} type="text" name="genre" />
        </div>
        <div>
          <label>Author</label>
          <input {...register("author")} type="text" name="author" />
        </div>
        <div>
          <label>Year</label>
          <input {...register("year")} type="number" name="year" />
        </div>
        <div>
          <button type="submit">Add Painting</button>
        </div>
      </form>
    </div>
  );
}
