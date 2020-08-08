import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth'; // Hooks de autenticação

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  // Enquanto minha aplicação estiver em loading
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  // SE tiver um usuario vou mostrar App Routes, se não AuthRoutes
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
