export default function GenderCheckBox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="male" className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-success"
            id="male"
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="female" className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-success"
            id="female"
          />
        </label>
      </div>
    </div>
  );
}
