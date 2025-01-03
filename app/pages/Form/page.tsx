'use client'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { ApplicationFormSchema } from "@/schemas/application-form.schema";
import { useState, useEffect } from "react";
import { Form } from "@/components/ui/form"
import { personalInfoQuestions } from "./Content/personalQuestions";
import { professionalExpQuestions } from "./Content/professionalQuestions";
import ProgressSection from "./Custom/ProgressSection";
import PageManager from "./Custom/PageManager";
import ReviewForm from "./Custom/ReviewForm";
import { safeLocalStorage } from "@/app/clientLocalStorage";

type ApplicationFormSchema = z.infer<typeof ApplicationFormSchema>;

export default function FormPage() {
  //Array declarations
  //To add a page, create the questions in /content and import them here
  //Add the import to the array, the component will respond
  //fix the zod validations and new fields in the schema
  //Also for /Custom/PageManager.tsx and /Custom/ReviewForm.tsx
  const totalPages = [personalInfoQuestions, professionalExpQuestions];
  const router = useRouter();

  //ZOD validation functions
  //Add default values for handling input fields
  const form = useForm<ApplicationFormSchema>({
    resolver: zodResolver(ApplicationFormSchema),
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      location: "",
      portfolioUrl: "",
      currentRole: "",
      yearsOfExperience: "",
      skills: "",
      actualCompany: "",
      education: "",
      resume: "",
      achievements: "",
    },
  });

  //To validate each step without submit function
  const { trigger } = form;

  //STATES management

  //Sets the page for the user
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = safeLocalStorage.getItem('currentPage');
    return saved ? JSON.parse(saved) : 1;
  });

  //sets the question list depending on the page
  const [questionsList, setQuestionsList] = useState(() => {
    const saved = safeLocalStorage.getItem('currentPage');
    const pageIndex = saved ? JSON.parse(saved) - 1 : 0;
    return totalPages[pageIndex] || totalPages[0];
  });

  //Progress bar management
  const totalPagesCount = totalPages.length + 1;
  const progress = (currentPage / totalPagesCount) * 100;

  //Update with UseEffect (persistent data in form)
  useEffect(() => {
    safeLocalStorage.setItem('currentPage', JSON.stringify(currentPage));
    const savedData = safeLocalStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        form.setValue(key as keyof ApplicationFormSchema, parsedData[key]);
      });
    }
  }, [currentPage]);


  //Button handlers
  const handlePrevious = () => {
    if (currentPage > 1) {
      const prevIndex = currentPage - 2;
      setQuestionsList(totalPages[prevIndex]);
      setCurrentPage(currentPage - 1);
    }
  }

  //Creates validation for each page, if it's valid, moves to the next page
  //If more pages added, modify the condition to handle the new pages
  // add more statements of fields to validate dependinf on the page
  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    //to prevent the auto-submit on the last page
    event.preventDefault();

    //fields to validate depending on the page
    const fieldsToValidate = currentPage === 1
      ? ['fullname', 'email', 'phone', 'location', 'portfolioUrl']
      : ['currentRole', 'yearsOfExperience', 'skills', 'actualCompany', 'education', 'resume', 'achievements'];

    const isValid = await trigger(fieldsToValidate as Array<keyof ApplicationFormSchema>);
    if (isValid && currentPage <= totalPages.length) {
      const nextIndex = currentPage;
      if (nextIndex <= totalPages.length) {
        setQuestionsList(totalPages[nextIndex]);
      }
      setCurrentPage(currentPage + 1);
    }
  }

  //Form submission handler
  const onSubmit: SubmitHandler<ApplicationFormSchema> = data => {
    try {
      /**
       * User validation??
       * Here is possible to add the logic to send the form data to the backend
       * Axios API request or fetch
       * Logic to send the copy of the data to user's email
       * try catch to handle errors
       * Also possible to return to form if the API or DB returns an error
       */
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    //Save the email to use in the Readme page
    safeLocalStorage.setItem("userEmail", data.email);
    //Clear
    safeLocalStorage.setItem("formData", JSON.stringify({}));
    safeLocalStorage.removeItem("formData");
    safeLocalStorage.removeItem("currentPage");
    //navigate to the success page
    router.push('./Readme');
  };

  //Main return component function
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="
      w-full flex flex-col items-center justify-center 
      bg-gradient-to-b from-green-200 to-green-100 rounded-md p-1">
        {progress === 100 ? (
          null
        ):(
          <div className="bg-white p-4 rounded-md shadow m-5 w-2/3">
          <h1 className="text-xl text-center justify-center bold mb-2">Formulario de solicitud</h1>
            <p className="text-md text-pretty text-opacity-80 justify-center bold text-justify p-3">Rellena los campos y revisa que la información sea correcta. ¡Gracias por contactarte con nosotrxs!</p>
        </div>
        )}
        <div className="bg-white p-4 rounded-md shadow m-5 w-2/3">
          {/*Components depending on the pages*/}
          {currentPage <= totalPages.length ? (
            <PageManager
              questionsList={questionsList}
              form={form}
            />
          ) : (
            <ReviewForm />
          )}
          {/*Progress bar section*/}
          <ProgressSection
            progress={progress}
            currentPage={currentPage}
            totalPagesCount={totalPagesCount}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={form.handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </Form>
  );
}