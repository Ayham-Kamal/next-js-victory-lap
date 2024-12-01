export function SignUpForm({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="firstname"
          className="block text-xs text-gray-600 uppercase"
        >
          First Name
        </label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="John"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="lastname"
          className="block text-xs text-gray-600 uppercase"
        >
          Last Name
        </label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Doe"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="weight"
          className="block text-xs text-gray-600 uppercase"
        >
          Weight (kg)
        </label>
        <input
          id="weight"
          name="weight"
          type="number"
          step="1"
          placeholder="70"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 uppercase">Gender</label>
        <div className="mt-1 flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="M"
              required
              className="h-4 w-4 text-black border-gray-300 focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="F"
              required
              className="h-4 w-4 text-black border-gray-300 focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">Female</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="other"
              required
              className="h-4 w-4 text-black border-gray-300 focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">Other</span>
          </label>
        </div>
      </div>
      {children}
    </form>
  );
}
