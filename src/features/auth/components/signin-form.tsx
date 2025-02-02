"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, EyeIcon, EyeClosed } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormValues } from "@/features/auth/types";
import { MoveUpRight } from "@/components/icons/ui-icons";

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      // Handle login logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email Address</FormLabel>
              <FormControl>
                <div className="relative ">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter your email"
                    className="pl-9  bg-white"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white flex flex-row justify-between items-center">
                <p>Password</p>
                <p>
                  <a href="#" className="text-[#069AEE] text-sm">
                    Forgot password?
                  </a>
                </p>
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-9 bg-white"
                    {...field}
                  />
                  {showPassword ? (
                    <EyeIcon
                      className="absolute right-3 top-3 h-4 w-4 text-muted-foreground cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeClosed
                      className="absolute right-3 top-3 h-4 w-4 text-muted-foreground cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#069AEE] py-5 font-medium text-lg"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
          <MoveUpRight className="stroke-white" />
        </Button>
      </form>
    </Form>
  );
};
