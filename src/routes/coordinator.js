export const goToLoginPage = (history) => {
  history.push("/");
};

export const goToSignUpPage = (history) => {
  history.push("/cadastro");
};

export const goToFormAppPage = (history) => {
  history.push("/viagens/inscrever");
};

export const goToAdminHomePage = (history) => {
  history.push("/admin");
};

export const goToTripDetailsPage = (history) => {
  history.push("/admin/viagens/:id");
};

export const goToCreateTripPage = (history) => {
  history.push("/admin/viagens/criarviagem");
};
