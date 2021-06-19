import { useState } from 'react';

export const useEnv = () => useState(process.env)[0];
