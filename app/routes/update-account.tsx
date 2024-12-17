// routes/update-account.tsx
import { prisma } from "~/utils/prisma.server"; // Pastikan prisma sudah terkonfigurasi
import { json, redirect } from "@remix-run/node";

export const action = async ({ request }: any) => {
  const formData = new URLSearchParams(await request.text());
  const { username, email, phoneNumber, fullName, address } = Object.fromEntries(formData.entries());

  const updatedUser = await prisma.user.update({
    where: { email }, // Menggunakan email atau id sebagai identifier
    data: {
      username,
      phoneNumber,
      fullName,
      address,
    },
  });

  return redirect("/profile"); // Redirect kembali ke halaman profile setelah update
};
