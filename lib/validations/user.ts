import * as z from 'zod';


export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Name Should Be Larger Than 3 Character!" })
    .max(30, { message: "Name Should Not Be Larger Than 30 Character!" }),

  username: z
    .string()
    .min(3, { message: "Username Should Be Larger Than 3 Character!" })
    .max(30, { message: "UserName Should Not Be Larger Than 30 Character!" }),

  bio: z
    .string()
    .min(3, { message: "Bio Should Be Larger Than 3 Character!" })
    .max(1000, { message: "Bio Should Not Be Larger Than 1000 Character!" }),
});