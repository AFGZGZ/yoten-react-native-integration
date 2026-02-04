export type YotenSessionParams = {
  languageCode: string;
  durationHours?: number;
  durationMinutes?: number;
  durationSeconds?: number;
  description?: string;
  activityId?: string;
};

export const useYotenStudySession = () => {
  const buildSessionUrl = (params: YotenSessionParams) => {
    const query = new URLSearchParams();

    query.append("language_code", params.languageCode);

    if (params.durationHours !== undefined)
      query.append("duration_hours", String(params.durationHours));

    if (params.durationMinutes !== undefined)
      query.append("duration_minutes", String(params.durationMinutes));

    if (params.durationSeconds !== undefined)
      query.append("duration_seconds", String(params.durationSeconds));

    if (params.description) query.append("description", params.description);

    if (params.activityId) query.append("activity_id", params.activityId);

    return `https://yoten.app/session/new?${query.toString()}`;
  };

  return { buildSessionUrl };
};
