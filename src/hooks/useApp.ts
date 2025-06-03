import { useState, useCallback } from 'react';
import { AppState, AppStep, User, Cup, Order } from '@/types';

// 🎯 Hook principal para gerenciar o estado da aplicação

const initialState: AppState = {
  step: 'login',
  user: null,
  selectedCup: null,
  order: null,
  loading: false,
  error: null,
};

export function useApp() {
  const [state, setState] = useState<AppState>(initialState);

  // Ações para navegar entre etapas
  const goToStep = useCallback((step: AppStep) => {
    setState(prev => ({ ...prev, step, error: null }));
  }, []);

  const goToLogin = useCallback(() => goToStep('login'), [goToStep]);
  const goToCupSelection = useCallback(() => goToStep('cup-selection'), [goToStep]);
  const goToPayment = useCallback(() => goToStep('payment'), [goToStep]);
  const goToConfirmation = useCallback(() => goToStep('confirmation'), [goToStep]);

  // Ações para gerenciar usuário
  const setUser = useCallback((user: User | null) => {
    setState(prev => ({ ...prev, user, error: null }));
  }, []);

  const loginUser = useCallback((user: User) => {
    setUser(user);
    goToCupSelection();
  }, [setUser, goToCupSelection]);

  // Ações para gerenciar copo selecionado
  const setSelectedCup = useCallback((cup: Cup | null) => {
    setState(prev => ({ ...prev, selectedCup: cup, error: null }));
  }, []);

  const selectCup = useCallback((cup: Cup) => {
    setSelectedCup(cup);
    goToPayment();
  }, [setSelectedCup, goToPayment]);

  // Ações para gerenciar pedido
  const setOrder = useCallback((order: Order | null) => {
    setState(prev => ({ ...prev, order, error: null }));
  }, []);

  const createOrder = useCallback((order: Order) => {
    setOrder(order);
    // Permanece na tela de pagamento até confirmação
  }, [setOrder]);

  const confirmPayment = useCallback(() => {
    if (state.order) {
      setState(prev => ({
        ...prev,
        order: prev.order ? { ...prev.order, status: 'paid', paidAt: new Date() } : null,
      }));
      goToConfirmation();
    }
  }, [state.order, goToConfirmation]);

  // Ações para gerenciar estados de loading e error
  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  // Ação para resetar a aplicação
  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  // Getters computados
  const isLoggedIn = Boolean(state.user?.isValid);
  const canProceed = {
    login: isLoggedIn,
    cupSelection: Boolean(state.selectedCup),
    payment: Boolean(state.order),
    confirmation: Boolean(state.order?.status === 'paid'),
  };

  return {
    // Estado
    ...state,
    
    // Getters
    isLoggedIn,
    canProceed,
    
    // Navegação
    goToStep,
    goToLogin,
    goToCupSelection,
    goToPayment,
    goToConfirmation,
    
    // Ações
    setUser,
    loginUser,
    setSelectedCup,
    selectCup,
    setOrder,
    createOrder,
    confirmPayment,
    setLoading,
    setError,
    reset,
  };
} 