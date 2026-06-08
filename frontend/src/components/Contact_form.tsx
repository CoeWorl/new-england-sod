import { useState } from "react";
import "./Contact_form.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const US_STATES = [{ value: "CT", label: "Connecticut" }]; // to be expanded when more states are available

type StateOption = {
  value: string;
  label: string;
};

type ContactFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  selectedState: StateOption | null;
  projectDetails: string;
};

async function sendFormData(data: ContactFormData) {
  const payload = {
    ...data,
    selectedState: data.selectedState?.value ?? "",
  };

  const response = await fetch("http://127.0.0.1:5000/api/get_user_info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      selectedState: null,
      projectDetails: "",
    },
  });

  // handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendFormData(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2 className="form-title">Message Sent!</h2>
          <p>
            Thanks for reaching out! We've received your message and sent a
            confirmation to your email. We'll be in touch within one business
            day.
          </p>
          <button onClick={() => setSubmitStatus("idle")}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Message Us!</h2>
      <p>
        Prefer to write it out? Send a quick message with your town, project
        size, and timing — we respond within a business day.
      </p>

      {submitStatus === "error" && (
        <p className="error-message submission-error">
          Something went wrong submitting your form. Please try again or call us
          directly.
        </p>
      )}

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-names">
          <div className="first-name-input">
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              type="text"
              {...register("firstName", {
                required: "First name is required",
                maxLength: {
                  value: 32,
                  message: "Name can't exceed 32 characters",
                },
              })}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>
          <div className="last-name-input">
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              type="text"
              {...register("lastName", {
                maxLength: {
                  value: 32,
                  message: "Name can't exceed 32 characters",
                },
              })}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div className="form-contact-info">
          <div className="phone-num-input">
            <label className="form-label">Phone</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. 203-123-4567"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(\d{10}|\d{3}-\d{3}-\d{4})$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>
          <div className="email-input">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="e.g. dummy@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email format is invalid",
                },
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="form-location-info">
          <div className="city-input">
            <label className="form-label">Town/City</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. Milford"
              {...register("city", {
                required: "Town/City is required",
              })}
            />
            {errors.city && (
              <span className="error-message">{errors.city.message}</span>
            )}
          </div>
          <div className="state-input">
            <label className="form-label">State</label>
            <Controller
              name="selectedState"
              control={control}
              rules={{
                required: "State is required",
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={US_STATES}
                  isSearchable
                  placeholder="Select a state"
                />
              )}
            />
            {errors.selectedState && (
              <span className="error-message">
                {errors.selectedState.message}
              </span>
            )}
          </div>
        </div>
        <div className="project-details">
          <label className="form-label">Project Details</label>
          <textarea
            className="form-input"
            placeholder="Any details that can help us get a quote."
            {...register("projectDetails", {
              required: "Details are required",
              maxLength: {
                value: 500,
                message: "Can't exceed 500 characters",
              },
            })}
          />
          {errors.projectDetails && (
            <span className="error-message">
              {errors.projectDetails.message}
            </span>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
