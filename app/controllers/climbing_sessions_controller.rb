class ClimbingSessionsController < ApplicationController

    def show
        climbing_session = find_climbing_session
        render json: climbing_session, status: :ok
    end

    def create
        # put find Boulder in here and create via the boulder??
        climbing_session = ClimbingSession.create!(climbing_session_params)
        render json: climbing_session, status: :created
    end

    def update
        climbing_session = find_climbing_session
        climbing_session.update!(climbing_session_params)
        render json: climbing_session, status: :accepted
    end

    def destroy
        climbing_session = find_climbing_session
        climbing_session.delete
        head :no_content
    end

    private

    def find_climbing_session
        ClimbingSession.find(params[:id])
    end

    def climbing_session_params
        params.permit(:date, :private, :completed, :boulder_rating, :notes, :boulder_problem_id, :user_id)
        # boulder_problem_id & user_id used just for postman testing purposes?
    end

end
