const GOOGLE_FORMS = {
  registration: {
    baseUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSdQKFuNDYc0Da9VxqWyPXUZhqxNE6ZS736W-46qYLHsQ_n5cw/viewform',
    fields: {
      companyName: 'entry.2005620554',
      contactPerson: 'entry.1045781291',
      email: 'entry.1065046570',
      phone: 'entry.1166974658',
      businessType: 'entry.839337160',
      products: 'entry.372839628',
      ingredients: 'entry.44390459',
      requirement: 'entry.628058587',
      location: 'entry.1535892891',
      additionalRequirements: 'entry.1278870279',
      consent: 'entry.1754034981',
    },
  },
  quote: {
    baseUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScazss6GgOzBAcamNWLc9iAw7Hm_lmNbBfW0twOAAO8qQ0zDg/viewform',
    fields: {
      companyName: 'entry.2005620554',
      contactPerson: 'entry.1045781291',
      email: 'entry.1065046570',
      phone: 'entry.1166974658',
      ingredient: 'entry.839337160',
      quantity: 'entry.772070836',
      application: 'entry.735207708',
      packaging: 'entry.601656574',
      location: 'entry.1006592287',
      additionalRequirements: 'entry.1047066169',
      consent: 'entry.440513089',
    },
  },
};

export function appendCheckboxValues(
  params: URLSearchParams,
  fieldId: string,
  values: string[]
): void {
  values.forEach((value) => {
    if (value) {
      params.append(fieldId, value);
    }
  });
}

export interface RegistrationFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  products: string[];
  ingredients: string[];
  requirement: string;
  location: string;
  additionalRequirements: string;
  consent: boolean;
}

export interface QuoteFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  ingredient: string;
  quantity: string;
  application: string;
  packaging: string;
  location: string;
  additionalRequirements: string;
  consent: boolean;
}

export function buildRegistrationFormUrl(data: RegistrationFormData): string {
  const form = GOOGLE_FORMS.registration;
  const params = new URLSearchParams();
  params.append('usp', 'pp_url');
  if (data.companyName) params.append(form.fields.companyName, data.companyName);
  if (data.contactPerson) params.append(form.fields.contactPerson, data.contactPerson);
  if (data.email) params.append(form.fields.email, data.email);
  if (data.phone) params.append(form.fields.phone, data.phone);
  if (data.businessType) params.append(form.fields.businessType, data.businessType);
  appendCheckboxValues(params, form.fields.products, data.products);
  appendCheckboxValues(params, form.fields.ingredients, data.ingredients);
  if (data.requirement) params.append(form.fields.requirement, data.requirement);
  if (data.location) params.append(form.fields.location, data.location);
  if (data.additionalRequirements) params.append(form.fields.additionalRequirements, data.additionalRequirements);
  if (data.consent) params.append(form.fields.consent, 'Yes');
  return `${form.baseUrl}?${params.toString()}`;
}

export function buildQuoteFormUrl(data: QuoteFormData): string {
  const form = GOOGLE_FORMS.quote;
  const params = new URLSearchParams();
  params.append('usp', 'pp_url');
  if (data.companyName) params.append(form.fields.companyName, data.companyName);
  if (data.contactPerson) params.append(form.fields.contactPerson, data.contactPerson);
  if (data.email) params.append(form.fields.email, data.email);
  if (data.phone) params.append(form.fields.phone, data.phone);
  if (data.ingredient) params.append(form.fields.ingredient, data.ingredient);
  if (data.quantity) params.append(form.fields.quantity, data.quantity);
  if (data.application) params.append(form.fields.application, data.application);
  if (data.packaging) params.append(form.fields.packaging, data.packaging);
  if (data.location) params.append(form.fields.location, data.location);
  if (data.additionalRequirements) params.append(form.fields.additionalRequirements, data.additionalRequirements);
  if (data.consent) params.append(form.fields.consent, 'Yes');
  return `${form.baseUrl}?${params.toString()}`;
}
