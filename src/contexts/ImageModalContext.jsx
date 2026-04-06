import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { portfolioData } from "../data/portfolio";

const ImageModalContext = createContext();

const initialState = {
  isOpen: false,
  projectId: null,
  currentIndex: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
        projectId: action.projectId,
        currentIndex: action.index || 0,
      };
    case "CLOSE_MODAL":
      return { ...initialState };
    case "NEXT_IMAGE":
      return {
        ...state,
        currentIndex: Math.min(
          state.currentIndex + 1,
          portfolioData.projects.find((p) => p.id === state.projectId)?.images
            ?.length - 1 || 0,
        ),
      };
    case "PREV_IMAGE":
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    default:
      return state;
  }
}

export function ImageModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = useCallback((projectId, index = 0) => {
    dispatch({ type: "OPEN_MODAL", projectId, index });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL" });
  }, []);

  const nextImage = useCallback(() => {
    dispatch({ type: "NEXT_IMAGE" });
  }, []);

  const prevImage = useCallback(() => {
    dispatch({ type: "PREV_IMAGE" });
  }, []);

  return (
    <ImageModalContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </ImageModalContext.Provider>
  );
}

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error("useImageModal must be used within ImageModalProvider");
  }
  return context;
}
