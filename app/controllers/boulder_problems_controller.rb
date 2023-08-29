class BoulderProblemsController < ApplicationController

    def index
        render json: BoulderProblem.all 
    end

    def show
        boulder_problem = find_boulder_problem
        render json: boulder_problem, status: :ok
    end

    def create
        boulder_problem = BoulderProblem.create!(boulder_problem_params)
        render json: boulder_problem, status: :created
    end

    def update
        boulder_problem = find_boulder_problem
        boulder_problem.update!(boulder_problem_params)
        render json: boulder_problem, status: :accepted
    end

    def destroy
        boulder_problem = find_boulder_problem
        boulder_problem.delete
        head :no_content
    end

    private

    def find_boulder_problem
        BoulderProblem.find(params[:id])
    end

    def boulder_problem_params
        params.permit(:name, :grade, :location, :rating, :description, :image_url)
    end

end
