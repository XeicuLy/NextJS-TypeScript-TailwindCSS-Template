---
to: app/<%= component_name %>/<%= h.changeCase.pascal(component_name) %>Presenter.tsx
---

export const <%= h.changeCase.pascal(component_name) %>Presenter = () => {
  // Client レンダリングに依存するところだけを切り出す。
  return <div><%= h.changeCase.pascal(component_name) %></div>;
};
