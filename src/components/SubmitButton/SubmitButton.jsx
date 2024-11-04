export const SubmitButton = ({ onSubmit, value }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={!value}
      placeholder="дд.мм.рррр"
      className="ml-5 text-white bg-rose-800 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 disabled:bg-rose-400"
    >
      Розрахувати
    </button>
  );
};
